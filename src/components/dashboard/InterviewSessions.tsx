import InterviewCard from "./InterviewCard";

export default function InterviewSessions() {
  return (
    <section className="space-y-6">

      <div>
        <h2 className="text-3xl font-bold">
          Interview Sessions
        </h2>

        <p className="text-slate-500">
          Your latest interview activity.
        </p>
      </div>

      <div className="space-y-4">

        <InterviewCard
          role="Frontend Developer"
          type="Technical"
          difficulty="Medium"
          status="Completed"
          score="92%"
          questions="10 Questions"
          date="12 July 2026"
        />

        <InterviewCard
          role="Backend Developer"
          type="Mixed"
          difficulty="Hard"
          status="In Progress"
          questions="4 / 10 Questions"
          date="Today"
        />

        <InterviewCard
          role="DevOps Engineer"
          type="Behavioral"
          difficulty="Easy"
          status="Scheduled"
          questions="Starts Tomorrow"
          date="13 July 2026"
        />

      </div>

    </section>
  );
}