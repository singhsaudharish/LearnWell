import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Search,
  Clock,
  Star,
  ArrowRight,
  Loader2,
  Check,
  SlidersHorizontal,
  X,
} from "lucide-react";

interface Course {
  _id: string;
  title: string;
  description: string;
  instructor: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  rating: number;
  image?: string;
}

const levelColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-red-100 text-red-700",
};

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const Courses = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  const [courses, setCourses] = useState<Course[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  const [enrolledIds, setEnrolledIds] = useState<Set<string>>(new Set());
  const [enrollingId, setEnrollingId] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/courses"
        );

        setCourses(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (!user) return;

      try {
        const res = await axios.get(
          `http://localhost:5000/api/enrollments/${user._id}`
        );

        setEnrolledIds(
          new Set(res.data.map((item: any) => item.courseId))
        );
      } catch (err) {
        console.error(err);
      }
    };

    fetchEnrollments();
  }, [user]);

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(courses.map((c) => c.category))),
    ];
  }, [courses]);

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        course.category === category;

      const matchesLevel =
        level === "All" ||
        course.level === level;

      const matchesPrice =
        course.price <= maxPrice;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel &&
        matchesPrice
      );
    });
  }, [courses, search, category, level, maxPrice]);

  const handleEnroll = async (courseId: string) => {
    if (!user) {
      navigate("/auth");
      return;
    }

    setEnrollingId(courseId);

    try {
      await axios.post(
        "http://localhost:5000/api/enrollments",
        {
          userId: user._id,
          courseId,
        }
      );

      setEnrolledIds((prev) => {
        const updated = new Set(prev);
        updated.add(courseId);
        return updated;
      });

      toast({
        title: "Enrolled Successfully",
      });
    } catch (err: any) {
      toast({
        title: "Enrollment Failed",
        description:
          err.response?.data?.message ??
          "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setEnrollingId(null);
    }
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setLevel("All");
    setMaxPrice(1000);
  };

  const hasActiveFilters =
    search ||
    category !== "All" ||
    level !== "All" ||
    maxPrice < 1000;

      return (
    <div className="py-12 md:py-20">
      <div className="container">

        <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold md:text-5xl">
            Our <span className="text-primary">Courses</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our collection of professional courses.
          </p>
        </div>

        {/* Filters */}

        <div className="mt-10 rounded-2xl border bg-card p-5 shadow-sm">

          <div className="mb-4 flex items-center gap-2">

            <SlidersHorizontal className="h-5 w-5 text-primary" />

            <span className="font-semibold">
              Search & Filters
            </span>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="relative">

              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                className="pl-9"
                placeholder="Search course..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            <Select
              value={category}
              onValueChange={setCategory}
            >

              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>

              <SelectContent>

                {categories.map((cat) => (

                  <SelectItem
                    key={cat}
                    value={cat}
                  >
                    {cat}
                  </SelectItem>

                ))}

              </SelectContent>

            </Select>

            <Select
              value={level}
              onValueChange={setLevel}
            >

              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>

              <SelectContent>

                {levels.map((lvl) => (

                  <SelectItem
                    key={lvl}
                    value={lvl}
                  >
                    {lvl}
                  </SelectItem>

                ))}

              </SelectContent>

            </Select>

            <div>

              <div className="mb-2 flex justify-between text-sm">

                <span>Max Price</span>

                <span>
                  ${maxPrice}
                </span>

              </div>

              <Slider
                value={[maxPrice]}
                onValueChange={(v) =>
                  setMaxPrice(v[0])
                }
                min={0}
                max={1000}
                step={10}
              />

            </div>

          </div>

          {hasActiveFilters && (

            <div className="mt-4 flex items-center justify-between">

              <p className="text-sm text-muted-foreground">

                {filtered.length} course
                {filtered.length !== 1 ? "s" : ""}
                {" "}found

              </p>

              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
              >

                <X className="mr-1 h-4 w-4" />

                Clear

              </Button>

            </div>

          )}

        </div>

        {/* Courses */}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {loadingCourses ? (

            <div className="col-span-full flex justify-center py-20">

              <Loader2 className="h-8 w-8 animate-spin text-primary" />

            </div>

          ) : filtered.length === 0 ? (

            <div className="col-span-full text-center py-20">

              <h2 className="text-xl font-bold">
                No Courses Found
              </h2>

              <p className="text-muted-foreground mt-2">
                Try changing your filters.
              </p>

            </div>

          ) : (

            filtered.map((course) => {

              const enrolled =
                enrolledIds.has(course._id);

              return (                <div
                  key={course._id}
                  className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative flex h-48 items-center justify-center bg-muted">
                    <span
                      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
                        levelColors[course.level] || ""
                      }`}
                    >
                      {course.level}
                    </span>

                    {course.image ? (
                      <img
                        src={course.image}
                        alt={course.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-5xl">📚</span>
                    )}
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {course.category}
                    </p>

                    <h3 className="mt-2 text-lg font-bold line-clamp-2">
                      {course.title}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      by {course.instructor}
                    </p>

                    <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-2xl font-bold">
                        ${course.price}
                      </span>

                      {enrolled ? (
                        <Button disabled variant="secondary">
                          <Check className="mr-1 h-4 w-4" />
                          Enrolled
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleEnroll(course._id)}
                          disabled={enrollingId === course._id}
                        >
                          {enrollingId === course._id && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          )}

                          Enroll

                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;