
"use client";

import {
  CalendarDays,
  ChevronDown,
  Search,
  Users,
  ArrowRight,
  Sparkles,
  Minus,
  Plus,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { destinations } from "../../lib/data/destinations";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const router = useRouter();
  const destinationControlRef = useRef<HTMLDivElement>(null);
  const travelersControlRef = useRef<HTMLDivElement>(null);
  const destinationTriggerRef = useRef<HTMLButtonElement>(null);
  const travelersTriggerRef = useRef<HTMLButtonElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [activePopover, setActivePopover] = useState<"destination" | "travelers" | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<(typeof destinations)[number] | null>(null);
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [validationError, setValidationError] = useState("");
  const [today] = useState(() => {
    const date = new Date();
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
    return localDate.toISOString().slice(0, 10);
  });

  useEffect(() => {
    function handleOutsideClick(event: PointerEvent) {
      const target = event.target as Node;
      const activeControl =
        activePopover === "destination"
          ? destinationControlRef.current
          : activePopover === "travelers"
            ? travelersControlRef.current
            : null;

      if (activeControl && !activeControl.contains(target)) {
        setActivePopover(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && activePopover) {
        setActivePopover(null);
        if (activePopover === "destination") {
          destinationTriggerRef.current?.focus();
        } else {
          travelersTriggerRef.current?.focus();
        }
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activePopover]);

  function togglePopover(popover: "destination" | "travelers") {
    setActivePopover((current) => current === popover ? null : popover);
  }

  function selectDestination(destination: (typeof destinations)[number]) {
    setSelectedDestination(destination);
    setActivePopover(null);
    setValidationError("");
    destinationTriggerRef.current?.focus();
  }

  function handleDateChange(value: string) {
    setTravelDate(value);
    setValidationError("");
  }

  function openDatePicker() {
    const input = dateInputRef.current;
    if (!input) return;

    if (typeof input.showPicker === "function") {
      input.showPicker();
      return;
    }

    input.focus();
    input.click();
  }

  function handleSearch() {
    if (!selectedDestination || !travelDate) {
      setValidationError(
        !selectedDestination && !travelDate
          ? "Choose a destination and travel date to continue."
          : !selectedDestination
            ? "Choose a destination to continue."
            : "Select a travel date to continue.",
      );
      setActivePopover(null);
      return;
    }

    const params = new URLSearchParams({
      destination: selectedDestination.name,
      travelDate,
      travelers: String(travelers),
    });

    router.push(`/inquiry?${params.toString()}`);
  }

  const formattedTravelDate = travelDate
    ? new Intl.DateTimeFormat("en-BD", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(new Date(`${travelDate}T00:00:00`))
    : "Select your date";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <Sparkles size={13} />
              <span>PLAN YOUR JOURNEY</span>
            </div>

            <h2>
              Where do you want
              <span> to go?</span>
            </h2>

            <p>
              Tell us what you are looking for and let us help shape your
              perfect journey.
            </p>
          </div>

          {/* Search Fields */}
          <div className={styles.searchArea}>
            <div className={styles.fields}>
              {/* Destination */}
              <div className={styles.control} ref={destinationControlRef}>
                <button
                  ref={destinationTriggerRef}
                  className={`${styles.field} ${selectedDestination ? styles.fieldSelected : ""} ${validationError && !selectedDestination ? styles.fieldInvalid : ""}`}
                  type="button"
                  aria-label={`Destination: ${selectedDestination?.name ?? "Choose a destination"}`}
                  aria-haspopup="listbox"
                  aria-expanded={activePopover === "destination"}
                  aria-controls="search-destination-list"
                  aria-describedby={
                    validationError && !selectedDestination
                      ? "search-validation-message"
                      : undefined
                  }
                  onClick={() => togglePopover("destination")}
                >
                  <div className={styles.icon}>
                    <Search size={18} />
                  </div>

                  <div className={styles.fieldContent}>
                    <small>Destination</small>
                    <strong>{selectedDestination?.name ?? "Choose a destination"}</strong>
                  </div>

                  <ChevronDown
                    size={16}
                    className={`${styles.chevron} ${activePopover === "destination" ? styles.chevronOpen : ""}`}
                  />
                </button>

                <div
                  id="search-destination-list"
                  className={`${styles.popover} ${styles.destinationPopover} ${activePopover === "destination" ? styles.popoverOpen : ""}`}
                  role="listbox"
                  aria-label="Choose a destination"
                  aria-hidden={activePopover !== "destination"}
                >
                  {destinations.map((destination) => (
                    <button
                      key={destination.slug}
                      className={`${styles.destinationOption} ${selectedDestination?.slug === destination.slug ? styles.optionSelected : ""}`}
                      type="button"
                      role="option"
                      aria-selected={selectedDestination?.slug === destination.slug}
                      tabIndex={activePopover === "destination" ? 0 : -1}
                      onClick={() => selectDestination(destination)}
                    >
                      <span>{destination.name}</span>
                      <small>{destination.country}</small>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div className={styles.dateControl}>
                <button
                  className={`${styles.field} ${styles.dateField} ${travelDate ? styles.fieldSelected : ""} ${validationError && !travelDate ? styles.fieldInvalid : ""}`}
                  type="button"
                  aria-label={`Travel date: ${travelDate ? formattedTravelDate : "Select your date"}`}
                  aria-haspopup="dialog"
                  aria-describedby={
                    validationError && !travelDate
                      ? "search-validation-message"
                      : undefined
                  }
                  onClick={openDatePicker}
                >
                  <div className={styles.icon}>
                    <CalendarDays size={18} />
                  </div>

                  <div className={styles.fieldContent}>
                    <small>Travel Date</small>
                    <strong>{formattedTravelDate}</strong>
                  </div>
                </button>
                <input
                  ref={dateInputRef}
                  className={styles.dateInput}
                  type="date"
                  aria-label="Travel date"
                  aria-invalid={Boolean(validationError && !travelDate)}
                  aria-describedby={validationError ? "search-validation-message" : undefined}
                  aria-hidden="true"
                  tabIndex={-1}
                  min={today}
                  value={travelDate}
                  onChange={(event) => handleDateChange(event.target.value)}
                />
              </div>

              {/* Travelers */}
              <div className={styles.control} ref={travelersControlRef}>
                <button
                  ref={travelersTriggerRef}
                  className={`${styles.field} ${activePopover === "travelers" ? styles.fieldSelected : ""}`}
                  type="button"
                  aria-label={`Travelers: ${travelers}`}
                  aria-haspopup="dialog"
                  aria-expanded={activePopover === "travelers"}
                  aria-controls="search-travelers-popover"
                  onClick={() => togglePopover("travelers")}
                >
                  <div className={styles.icon}>
                    <Users size={18} />
                  </div>

                  <div className={styles.fieldContent}>
                    <small>Travelers</small>
                    <strong>{travelers} {travelers === 1 ? "Traveler" : "Travelers"}</strong>
                  </div>

                  <ChevronDown
                    size={16}
                    className={`${styles.chevron} ${activePopover === "travelers" ? styles.chevronOpen : ""}`}
                  />
                </button>

                <div
                  id="search-travelers-popover"
                  className={`${styles.popover} ${styles.travelersPopover} ${activePopover === "travelers" ? styles.popoverOpen : ""}`}
                  role="dialog"
                  aria-label="Select number of travelers"
                  aria-hidden={activePopover !== "travelers"}
                >
                  <span className={styles.popoverLabel}>Travelers</span>
                  <div className={styles.stepper}>
                    <button
                      className={styles.stepButton}
                      type="button"
                      aria-label="Remove one traveler"
                      disabled={travelers <= 1}
                      tabIndex={activePopover === "travelers" ? 0 : -1}
                      onClick={() => setTravelers((count) => Math.max(1, count - 1))}
                    >
                      <Minus size={16} />
                    </button>
                    <output className={styles.travelerCount} aria-live="polite">
                      {travelers}
                    </output>
                    <button
                      className={styles.stepButton}
                      type="button"
                      aria-label="Add one traveler"
                      disabled={travelers >= 20}
                      tabIndex={activePopover === "travelers" ? 0 : -1}
                      onClick={() => setTravelers((count) => Math.min(20, count + 1))}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <span className={styles.travelerHint}>Up to 20 travelers</span>
                </div>
              </div>

              {/* CTA */}
              <button
                className={styles.searchButton}
                type="button"
                aria-describedby={validationError ? "search-validation-message" : undefined}
                onClick={handleSearch}
              >
                <span>Find My Trip</span>
                <ArrowRight size={17} />
              </button>
            </div>

            {validationError && (
              <p
                className={styles.validationMessage}
                id="search-validation-message"
                role="alert"
              >
                {validationError}
              </p>
            )}

            <div className={styles.bottomNote}>
              <span className={styles.liveDot} />
              <span>Travel planning made simple</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}