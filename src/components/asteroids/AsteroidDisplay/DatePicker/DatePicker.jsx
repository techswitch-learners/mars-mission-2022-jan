import React, { useState } from "react";

export function DatePicker({ date, setDate, loading }) {
  const [dateValue, setDateValue] = useState("2022-02-01");

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.firstChild.value);
          setDate(e.target.firstChild.value);
        }}
      >
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
