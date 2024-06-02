import { useContext } from "react";
import { formsContext } from "../context/FormsContext";

export function useForms() {
    const context = useContext(formsContext)
    return context
}