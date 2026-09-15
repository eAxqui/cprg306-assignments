import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <h2>Student Info</h2>
      <p>Name: John Acilo</p>
      <p>
        GitHub Repository:{" "}
        <Link
          href="https://github.com/eAxqui"
          target="_blank"
          rel="noopener noreferrer"
        >
          cprg306-assignments
        </Link>
      </p>
    </section>
  );
}
