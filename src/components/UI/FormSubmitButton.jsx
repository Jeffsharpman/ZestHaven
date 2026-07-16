import { Loader } from "lucide-react";
import Button from "./Button";

function FormSubmitButton({ loading, loadingText = "Sending...", children, className = "", ...props }) {
  return (
    <Button
      type="submit"
      variant="primary"
      size="lg"
      arrow={!loading}
      disabled={loading}
      className={`w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {loading ? (
        <><Loader className="h-4 w-4 animate-spin" aria-hidden="true" /> {loadingText}</>
      ) : (
        children
      )}
    </Button>
  );
}

export default FormSubmitButton;
