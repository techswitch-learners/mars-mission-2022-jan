import React from "react";

export function DatePicker({ date, setDate }) {
  return (
    <section>
      <form>
        <label htmlFor="date">date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            console.log(date);
          }}
        />
      </form>
    </section>
  );
}
