import React, { useState } from "react";

export function DatePicker({ setDate, loading }) {
  const [dateValue, setDateValue] = useState("2022-02-01");

  return (
    <section className="date-picker">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDate(dateValue);
        }}
      >
        <label htmlFor="date">Select a date: </label>
        <input
          type="date"
          id="date"
          value={dateValue}
          onChange={(e) => {
            setDateValue(e.target.value);
          }}
        />
        <input type="submit" disabled={loading} />
      </form>
    </section>
  );
}
