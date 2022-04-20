import styles from "./BodyChar.module.css";

import { useEffect } from "react";

export default function BoxyChar() {
  useEffect(() => {
    let eye = document.getElementsByClassName(styles.boxyCharacter__EyeBall);
    document.onmousemove = function (e) {
      var width = window.innerWidth;
      var x = e.clientX;
      var a = x / width;
      a = a * 100;
      var height = window.innerHeight;
      var y = e.clientY;
      var b = y / height;
      b = b * 100;
      eye[0].style.cssText =
        "left: " +
        a +
        "%; top: " +
        b +
        "%;" +
        "transform:translate(-" +
        a +
        "%,-" +
        b +
        "%)";
      eye[1].style.cssText =
        "left: " +
        a +
        "%; top: " +
        b +
        "%;" +
        "transform:translate(-" +
        a +
        "%,-" +
        b +
        "%)";
    };
  }, [true]);

  return (
    <div className={styles.boxyCharacter}>
      <img src="/boxy-cube.png" alt="" />
      <div
        className={
          styles.boxyCharacter__boxyEye + " " + styles.boxyCharacter__leftEye
        }
      >
        <div className={styles.boxyCharacter__EyeBall}>
          <div className=""></div>
        </div>
      </div>
      <div
        className={
          styles.boxyCharacter__boxyEye + " " + styles.boxyCharacter__rightEye
        }
      >
        <div className={styles.boxyCharacter__EyeBall}>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
