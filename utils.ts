// utils.ts

export function formatLocaleDateUS(date: Date | string): string {
    const d = typeof date === "string" ? new Date(date) : date;
  
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  export function paresdServerActionsTemplate<T>(response:T){

    return JSON.parse(JSON.stringify(response));
  }
  