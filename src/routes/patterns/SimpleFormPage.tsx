import css from "./patterns.module.css";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
import { GoAAccordion } from "@abgov/react-components";
export default function SimpleFormPage() {
  return (
    <ComponentContent cssQuery="h3[id], h4[id]">
      <h1>Forms</h1>
      <h3>
        Design forms that help Albertan citizens understand the task, focus on the question and its answer, and complete the form.
      </h3>
      <GoAAccordion heading="Who are the primary users for the simple form pattern?">
        <p>
          <strong>Primary users:</strong> citizens, public, external
          <br/>
          You are designing a public service for citizens. It should be designed to be as simple and intuitive as possible, while ensuring citizens can make complete and informed decisions for themselves using the service.
          There is an emphasis on an accessible experience with a low cognitive load for users who use the service infrequently.
        </p>
      </GoAAccordion>

      <h3 id="users" className={css["second-heading"]}>Which user are you designing for?</h3>
      <h4 id="citizen">A) Citizen (public, external, customer)</h4>
      <p>
        You are designing a public service for citizens. It should be designed to be as simple and intuitive as possible,
        while ensuring citizens can make complete and informed decisions for themselves using the service.
        There is an emphasis on an accessible experience with a low cognitive load for users who use the service infrequently.
      </p>
      <a href="#">Simple form pattern</a>

      <h4 id="service-worker">B) Service worker (service provider, internal, business)</h4>
      <p>
        You are designing a workspace for government workers.
        It should be designed for staff to work as accurately and efficiently as possible,
        while ensuring the best outcome for the citizen.
        <br/>
        There is an emphasis on efficient navigation for users who use the service frequently.
      </p>
      <a href="#">Complex form pattern</a>
    </ComponentContent>
  );
}
