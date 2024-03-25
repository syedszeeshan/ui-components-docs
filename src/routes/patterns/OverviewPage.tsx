import css from "./patterns.module.css";
export default function OverviewPage() {
  return (
    <>
      <h1>Patterns</h1>
      <h3>
        Common patterns and page templates to use as a starting point for a government service.
      </h3>
      <h3 className={css["second-heading"]}>Patterns</h3>
      <ul>
        <li><a href="/patterns/simple-form">Simple form</a></li>
      </ul>
      <h3 className={css["second-heading"]}>Pages</h3>
      <ul>
        <li><a href="#">Start page</a></li>
        <li><a href="#">Task list page</a></li>
        <li><a href="#">Question page</a></li>
        <li><a href="#">Review page</a></li>
        <li><a href="#">Results page</a></li>
      </ul>
    </>
  );
}
