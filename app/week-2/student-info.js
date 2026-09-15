import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <h2>Student Info</h2>
      <p>Name: John Acilo</p>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/eAxqui"
        >
        John Eric's GitHub
        </Link>
      </p>
    </section>
  );
}
