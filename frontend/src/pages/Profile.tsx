import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { User, BookOpen, Save, LogOut, Loader2 ,MessageSquare,Star} from "lucide-react";

interface EnrolledCourse {
  _id: string;
  progress: number;
  enrolled_at: string;
  course: {
    _id: string;
    title: string;
    instructor: string;
    category: string;
    level: string;
  };
}

const Profile = () => {
  const { user, loading, signOut, refreshProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [displayName, setDisplayName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [bio, setBio] = useState("");
  const [saving, setSaving] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);

  const [rating, setRating] = useState(5);
  const [overallFeedback, setOverallFeedback] = useState("");
  const [likedMost, setLikedMost] = useState("");
  const [improvements, setImprovements] = useState("");
  const [newFeatures, setNewFeatures] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [sendingFeedback, setSendingFeedback] = useState(false);

  // Redirect if user is not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [loading, user, navigate]);

  // Load user profile data
  useEffect(() => {
    if (user) {
      setDisplayName(user.name || "");
      setAvatarUrl(user.avatar || "");
      setBio(user.bio || "");
    }
  }, [user]);

  // Fetch enrolled courses
  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      if (!user?._id) return;

      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `http://localhost:5000/api/enrollments/${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Enrollment response:", res.data);

        // Backend may return:
        // 1. an array
        // 2. { enrollments: [...] }
        // 3. { data: [...] }

        let courses: EnrolledCourse[] = [];

        if (Array.isArray(res.data)) {
          courses = res.data;
        } else if (Array.isArray(res.data.enrollments)) {
          courses = res.data.enrollments;
        } else if (Array.isArray(res.data.data)) {
          courses = res.data.data;
        }

        setEnrolledCourses(courses);
      } catch (err) {
        console.error("Failed to fetch enrolled courses:", err);
        setEnrolledCourses([]);
      }
    };

    fetchEnrolledCourses();
  }, [user]);

  // Save profile
  const handleSave = async () => {
    if (!user) return;

    setSaving(true);

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5000/api/users/profile",
        {
          name: displayName,
          avatar: avatarUrl,
          bio,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await refreshProfile();

      toast({
        title: "Profile updated!",
        description: "Your profile has been updated successfully.",
      });
    } catch (err: any) {
      console.error("Profile update error:", err);

      toast({
        title: "Error",
        description:
          err.response?.data?.message || "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  // Sign out
  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const initials = displayName
    ? displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : user.email?.[0]?.toUpperCase() || "?";

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-3xl">
        <h1 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
          My Profile
        </h1>

        {/* Profile Card */}
        <div className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <Avatar className="h-20 w-20 text-2xl">
              <AvatarImage
                src={avatarUrl || undefined}
                alt={displayName}
              />

              <AvatarFallback className="bg-primary/10 font-bold text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="w-full flex-1 space-y-4">
              {/* Name */}
              <div>
                <Label htmlFor="displayName">Display Name</Label>

                <Input
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1"
                />
              </div>

              {/* Avatar */}
              <div>
                <Label htmlFor="avatarUrl">Avatar URL</Label>

                <Input
                  id="avatarUrl"
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  placeholder="https://example.com/avatar.jpg"
                  className="mt-1"
                />
              </div>

              {/* Bio */}
              <div>
                <Label htmlFor="bio">Bio</Label>

                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell us about yourself..."
                  className="mt-1"
                  rows={3}
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button onClick={handleSave} disabled={saving}>
                  {saving ? (
                    <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="mr-1 h-4 w-4" />
                  )}

                  Save Profile
                </Button>

                <Button variant="outline" onClick={handleSignOut}>
                  <LogOut className="mr-1 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="mt-10">
          <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-foreground">
            <BookOpen className="h-6 w-6 text-primary" />
            Enrolled Courses
          </h2>

          {enrolledCourses.length === 0 ? (
            <div className="mt-4 rounded-2xl border bg-card p-8 text-center">
              <User className="mx-auto h-10 w-10 text-muted-foreground/50" />

              <p className="mt-3 font-semibold text-foreground">
                No courses yet
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Browse our catalog and enroll in your first course!
              </p>

              <Button
                className="mt-4"
                onClick={() => navigate("/courses")}
              >
                Explore Courses
              </Button>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {enrolledCourses.map((ec) => (
                <div
                  key={ec._id}
                  className="flex items-center justify-between rounded-xl border bg-card p-4"
                >
                  <div>
                    <p className="font-heading font-bold text-foreground">
                      {ec.course?.title || "Course"}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {ec.course?.instructor || "Unknown Instructor"} ·{" "}
                      {ec.course?.category || "General"} ·{" "}
                      {ec.course?.level || "Beginner"}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary">
                      {ec.progress || 0}%
                    </p>

                    <div className="mt-1 h-2 w-24 rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{
                          width: `${Math.min(
                            Math.max(ec.progress || 0, 0),
                            100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Feedback */}
<div className="mt-10">
  <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-foreground">
    <MessageSquare className="h-6 w-6 text-primary" />
    Share Your Feedback
  </h2>

  <div className="mt-4 rounded-2xl border bg-card p-6 shadow-sm">
    <p className="text-sm text-muted-foreground">
      Your feedback helps us improve LearnWell and build features
      that are useful for students.
    </p>

    {/* Rating */}
    <div className="mt-6">
      <Label>How would you rate LearnWell?</Label>

      <div className="mt-2 flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className="transition-transform hover:scale-110"
          >
            <Star
              className={`h-7 w-7 ${
                star <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground"
              }`}
            />
          </button>
        ))}
      </div>
    </div>

    {/* Overall Feedback */}
    <div className="mt-6">
      <Label htmlFor="overallFeedback">
        What do you think about LearnWell?
      </Label>

      <Textarea
        id="overallFeedback"
        value={overallFeedback}
        onChange={(e) => setOverallFeedback(e.target.value)}
        placeholder="Tell us about your overall experience..."
        rows={4}
        className="mt-2"
      />
    </div>

    {/* What user likes */}
    <div className="mt-5">
      <Label htmlFor="likedMost">
        What do you like most about LearnWell?
      </Label>

      <Textarea
        id="likedMost"
        value={likedMost}
        onChange={(e) => setLikedMost(e.target.value)}
        placeholder="For example: Courses, Coding Q&A, design, explanations..."
        rows={3}
        className="mt-2"
      />
    </div>

    {/* Improvements */}
    <div className="mt-5">
      <Label htmlFor="improvements">
        What should we improve?
      </Label>

      <Textarea
        id="improvements"
        value={improvements}
        onChange={(e) => setImprovements(e.target.value)}
        placeholder="Tell us what could be better..."
        rows={3}
        className="mt-2"
      />
    </div>

    {/* New features */}
    <div className="mt-5">
      <Label htmlFor="newFeatures">
        What would you like us to add?
      </Label>

      <Textarea
        id="newFeatures"
        value={newFeatures}
        onChange={(e) => setNewFeatures(e.target.value)}
        placeholder="For example: New courses, quizzes, certificates, projects, programming languages..."
        rows={3}
        className="mt-2"
      />
    </div>

    {/* Suggestions */}
    <div className="mt-5">
      <Label htmlFor="suggestions">
        Any other suggestions?
      </Label>

      <Textarea
        id="suggestions"
        value={suggestions}
        onChange={(e) => setSuggestions(e.target.value)}
        placeholder="Anything else you would like us to know?"
        rows={3}
        className="mt-2"
      />
    </div>

    {/* Submit */}
    <Button
      className="mt-6"
      disabled={sendingFeedback || !overallFeedback.trim()}
      onClick={async () => {
        try {
          setSendingFeedback(true);

          const token = localStorage.getItem("token");

          await axios.post(
           "http://localhost:5000/api/feedback",
              {
         user: user._id,
         name: user.name,
         email: user.email,
         rating,
         overallFeedback,
         likedMost,
         improvements,
         newFeatures,
         suggestions,
             },
             
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast({
            title: "Thank you for your feedback!",
            description:
              "Your suggestions have been submitted successfully.",
          });

          setRating(5);
          setOverallFeedback("");
          setLikedMost("");
          setImprovements("");
          setNewFeatures("");
          setSuggestions("");
        } catch (err: any) {
          console.error("Feedback error:", err);

          toast({
            title: "Error",
            description:
              err.response?.data?.message ||
              "Failed to submit feedback",
            variant: "destructive",
          });
        } finally {
          setSendingFeedback(false);
        }
      }}
    >
      {sendingFeedback ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <MessageSquare className="mr-2 h-4 w-4" />
      )}

      Send Feedback
              </Button>
           </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;