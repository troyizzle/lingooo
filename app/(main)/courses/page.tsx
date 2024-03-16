import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./_components/list"

const CoursesPage = async () => {
  const coursesData = await getCourses();
  const userProgressData = await getUserProgress();

  const [courses, userProgress] = await Promise.all([coursesData, userProgressData]);

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="">
        Courses Page
      </h1>

      <List
        courses={courses}
        activeCourseId={userProgress?.activeCourseId ?? null}
      />
    </div>
  )
}

export default CoursesPage;
