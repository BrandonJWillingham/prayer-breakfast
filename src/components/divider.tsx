import { Diamond } from "lucide-react";
import styles from "./divider.module.css";

export default function Divider() {
  return (
    <div className={styles.divider}>
        <span />
            <Diamond className={styles.diamond} />
        <span />
    </div>
  );
}
