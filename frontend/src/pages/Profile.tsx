import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { User, BookOpen, Save, LogOut, Loader2, MessageSquare, Star, Settings, X, Pencil } from "lucide-react";
import api from "@/api/axios";

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
  const [isEditing, setIsEditing] = useState(false);
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
        const res = await api.get(`/enrollments/${user._id}`);

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
      await api.put("/users/profile", {
        name: displayName.trim(),
        avatar: avatarUrl.trim(),
        bio: bio.trim(),
      });

      await refreshProfile();
      setIsEditing(false);

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

        {/* Profile overview and settings */}
        <div className="mt-8 overflow-hidden rounded-2xl border bg-card shadow-sm">
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
            <Avatar className="h-24 w-24 shrink-0 text-2xl">
              <AvatarImage src={avatarUrl || undefined} alt={displayName} />
              <AvatarFallback className="bg-primary/10 font-bold text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h2 className="break-words font-heading text-2xl font-bold text-foreground">
                {displayName || "Your Name"}
              </h2>
              <p className="mt-1 break-all text-sm text-muted-foreground">
                {user.email}
              </p>
              <p className="mt-3 whitespace-pre-wrap text-sm text-muted-foreground">
                {bio || "Add a short bio to tell others about yourself."}
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap justify-center gap-2 sm:justify-end">
              <Button
                variant="outline"
                onClick={() => setIsEditing((current) => !current)}
              >
                {isEditing ? (
                  <X className="mr-2 h-4 w-4" />
                ) : (
                  <Settings className="mr-2 h-4 w-4" />
                )}
                {isEditing ? "Close Settings" : "Settings"}
              </Button>
              <Button variant="ghost" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>

          {isEditing && (
            <div className="border-t bg-muted/20 p-6">
              <div className="mb-5">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Profile Settings
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Update the information shown on your LearnWell profile.
                </p>
              </div>

              <div className="grid gap-5">
                <div>
                  <Label htmlFor="displayName">Full Name</Label>
                  <Input
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Your name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="avatarUrl">Profile Photo URL</Label>
                  <Input
                    id="avatarUrl"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    placeholder="https://example.com/avatar.jpg"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="bio">About Me</Label>
                  <Textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Write a little about yourself..."
                    className="mt-2"
                    rows={4}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  disabled={saving}
                  onClick={() => {
                    setDisplayName(user.name || "");
                    setAvatarUrl(user.avatar || "");
                    setBio(user.bio || "");
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={handleSave} disabled={saving || !displayName.trim()}>
                  {saving ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="mr-2 h-4 w-4" />
                  )}
                  {saving ? "Updating..." : "Update Profile"}
                </Button>
              </div>
            </div>
          )}
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

           await api.post("/feedback", {
             user: user._id,
             name: user.name,
             email: user.email,
             rating,
             overallFeedback,
             likedMost,
             improvements,
             newFeatures,
             suggestions,
            });

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