function formatTime() {
  function formatTimes(time) {
    if (!(time instanceof Date) && typeof time !== "string") {
      throw new Error(
        "Invalid time format. Expected a Date object or a date string."
      );
    }

    const givenTime = new Date(time);
    const seconds = Math.floor((new Date() - givenTime) / 1000);
    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count > 0) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }
    return "Just now";
  }

  return { formatTimes };
}

export default formatTime;
