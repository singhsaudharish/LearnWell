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
import { User, BookOpen, Save, LogOut, Loader2 } from "lucide-react";

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

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [loading, user, navigate]);

  useEffect(() => {
  if (user) {
    setDisplayName(user.name || "");
    setAvatarUrl(user.avatar || "");
    setBio(user.bio || "");
  }
}, [user]);

  useEffect(() => {
  const fetchEnrolledCourses = async () => {
    if (!user?._id) return;

    try {
      const res = await axios.get(
  `/api/enrollments/${user._id}`,
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }
);

      setEnrolledCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchEnrolledCourses();
}, [user]);

  const handleSave = async () => {
  if (!user) return;

  setSaving(true);

  try {
    await axios.put(
      "http://localhost:5000/api/users/profile",
      {
        displayName,
        avatarUrl,
        bio,
      },
      {
        withCredentials: true,
      }
    );

    await refreshProfile();

    toast({
      title: "Profile updated!",
    });
  } catch (err: any) {
    toast({
      title: "Error",
      description: err.response?.data?.message || "Failed to update profile",
      variant: "destructive",
    });
  }

  setSaving(false);
};
   

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

  const initials = displayName
    ? displayName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : user?.email?.[0]?.toUpperCase() || "?";

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
              <AvatarImage src={avatarUrl || undefined} alt={displayName} />
              <AvatarFallback className="bg-primary/10 text-primary font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4 w-full">
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
              <div className="flex gap-3">
                <Button onClick={handleSave} disabled={saving}>
                  {saving ? <Loader2 className="mr-1 h-4 w-4 animate-spin" /> : <Save className="mr-1 h-4 w-4" />}
                  Save Profile
                </Button>
                <Button variant="outline" onClick={handleSignOut}>
                  <LogOut className="mr-1 h-4 w-4" /> Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="mt-10">
          <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Enrolled Courses
          </h2>
          {enrolledCourses.length === 0 ? (
            <div className="mt-4 rounded-2xl border bg-card p-8 text-center">
              <User className="mx-auto h-10 w-10 text-muted-foreground/50" />
              <p className="mt-3 font-semibold text-foreground">No courses yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Browse our catalog and enroll in your first course!
              </p>
              <Button className="mt-4" onClick={() => navigate("/courses")}>
                Explore Courses
              </Button>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {enrolledCourses.map((ec) => (
                <div key={ec.id} className="flex items-center justify-between rounded-xl border bg-card p-4">
                  <div>
                    <p className="font-heading font-bold text-foreground">{ec.courses.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {ec.courses.instructor} · {ec.courses.category} · {ec.courses.level}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary">{ec.progress}%</p>
                    <div className="mt-1 h-2 w-24 rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${ec.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
