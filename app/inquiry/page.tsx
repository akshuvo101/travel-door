type InquirySearchParams = {
  destination?: string | string[];
  travelDate?: string | string[];
  travelers?: string | string[];
};

function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

export default async function Inquiry({
  searchParams,
}: {
  searchParams: Promise<InquirySearchParams>;
}) {
  const params = await searchParams;
  const destination = typeof params.destination === "string" ? params.destination : "";
  const travelDate =
    typeof params.travelDate === "string" && isValidDate(params.travelDate)
      ? params.travelDate
      : "";
  const requestedTravelers =
    typeof params.travelers === "string" ? Number(params.travelers) : 2;
  const travelers =
    Number.isInteger(requestedTravelers) &&
    requestedTravelers >= 1 &&
    requestedTravelers <= 20
      ? requestedTravelers
      : 2;

  return (
    <main className="simple-page">
      <div className="container narrow">
        <span className="eyebrow">TRAVEL INQUIRY</span>
        <h1>Tell us about your trip.</h1>
        <p>
          Share a few details and the Travel Door team can follow up with a
          suitable plan for your journey.
        </p>

        <form className="inquiry-form">
          <label>
            Name
            <input name="name" autoComplete="name" placeholder="Your full name" />
          </label>
          <label>
            Phone
            <input name="phone" autoComplete="tel" placeholder="+880 1XXX-XXXXXX" />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </label>
          <label>
            Destination
            <input
              name="destination"
              defaultValue={destination}
              placeholder="e.g. Thailand, Dubai, Malaysia"
            />
          </label>
          <label>
            Travel date
            <input name="travelDate" type="date" defaultValue={travelDate} />
          </label>
          <label>
            Travelers
            <input
              name="travelers"
              type="number"
              min="1"
              max="20"
              defaultValue={travelers}
              placeholder="2"
            />
          </label>
          <label>
            Service
            <select name="service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Tour Package</option>
              <option>Air Ticketing</option>
              <option>Visa Assistance</option>
              <option>Hotel Reservation</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell us what you are looking for..." />
          </label>
          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
    </main>
  );
}
