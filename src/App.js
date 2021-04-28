import { useState } from "react";
import styles from "./app.module.scss";

const INITIAL_RESULT_STATE = "";

function App() {
    const [result, setResult] = useState(INITIAL_RESULT_STATE);
    const [currentVal, setCurrentVal] = useState(INITIAL_RESULT_STATE);

    const handleNumClick = (num) => {
        if (currentVal === "0") setCurrentVal(num);
        else setCurrentVal(currentVal + num);
    };

    const isNumber = () => {
        const lastChar = currentVal.split("").pop();
        return !isNaN(lastChar);
    };

    const handleReset = () => {
        setResult(0);
        setCurrentVal(0);
    };

    const handleDelete = () => {};

    const handleOperatorClick = (operator) => {
        const isNum = isNumber();

        if (isNum) setCurrentVal(currentVal + operator);
        else {
            let newString = currentVal.slice(0, -1);
            newString += operator;
            setCurrentVal(newString);
        }
    };

    const handleEqual = () => {
        const isNum = isNumber();

        if (isNum) {
            const validStr = currentVal.replace("%", "/ 100 *");
            setResult(eval(validStr));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.calculator}>
                <div className={styles.result}>
                    <div className={styles.currentVal}>{currentVal}</div>
                    <div>{result}</div>
                </div>
                <div className={styles.buttons}>
                    <ul className={styles.row}>
                        <li className={styles.column} onClick={handleReset}>
                            C
                        </li>
                        <li className={styles.column} onClick={handleDelete}>
                            Del
                        </li>
                        <li className={styles.column} onClick={() => handleOperatorClick("%")}>
                            %
                        </li>
                        <li className={styles.column} onClick={() => handleOperatorClick("/")}>
                            /
                        </li>
                    </ul>
                    <ul className={styles.row}>
                        <li className={styles.column} onClick={() => handleNumClick("7")}>
                            7
                        </li>
                        <li className={styles.column} onClick={() => handleNumClick("8")}>
                            8
                        </li>
                        <li className={styles.column} onClick={() => handleNumClick("9")}>
                            9
                        </li>
                        <li className={styles.column} onClick={() => handleOperatorClick("*")}>
                            *
                        </li>
                    </ul>
                    <ul className={styles.row}>
                        <li className={styles.column} onClick={() => handleNumClick("4")}>
                            4
                        </li>
                        <li className={styles.column} onClick={() => handleNumClick("5")}>
                            5
                        </li>
                        <li className={styles.column} onClick={() => handleNumClick("6")}>
                            6
                        </li>
                        <li className={styles.column} onClick={() => handleOperatorClick("-")}>
                            -
                        </li>
                    </ul>
                    <ul className={styles.row}>
                        <li className={styles.column} onClick={() => handleNumClick("1")}>
                            1
                        </li>
                        <li className={styles.column} onClick={() => handleNumClick("2")}>
                            2
                        </li>
                        <li className={styles.column} onClick={() => handleNumClick("3")}>
                            3
                        </li>
                        <li className={styles.column} onClick={() => handleOperatorClick("+")}>
                            +
                        </li>
                    </ul>
                    <ul className={styles.row}>
                        <li
                            className={styles.column}
                            style={{ flex: "2 0" }}
                            onClick={() => handleNumClick("0")}
                        >
                            0
                        </li>
                        <li className={styles.column} onClick={() => handleOperatorClick(".")}>
                            .
                        </li>
                        <li className={styles.column} onClick={handleEqual}>
                            =
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
