// required for jest-dom expect extensions, e.g. expect(...).toBeInDocument()
import "@testing-library/jest-dom/extend-expect";
import { configure } from "@testing-library/react";

configure({ testIdAttribute: "data-testid" });
