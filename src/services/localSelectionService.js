
export const selections = [
    { _id: "1", name: "Green", className: "badge badge-success", imgSrc: "images/covid-prevent.svg" },
    { _id: "2", name: "Yellow", className: "badge badge-yellow", imgSrc: "images/covid-protect.svg" },
    { _id: "3", name: "Orange", className: "badge badge-orange", imgSrc: "images/covid-restrict.svg" },
    { _id: "4", name: "Red", className: "badge badge-danger", imgSrc: "images/covid-control.svg" },
    { _id: "5", name: "Grey", className: "badge badge-secondary", imgSrc: "images/covid-lockdown.svg" }
];
  
export function getSelections() {
    return selections;
}