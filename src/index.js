import React from "react";

const colors = {
  A: [226, 95, 81],
  B: [242, 96, 145],
  C: [187, 101, 202],
  Ç: [222, 38, 160],
  D: [149, 114, 207],
  E: [120, 132, 205],
  F: [91, 149, 249],
  G: [72, 194, 249],
  Ğ: [255, 167, 38],
  H: [69, 208, 226],
  I: [72, 182, 172],
  İ: [38, 166, 154],
  J: [82, 188, 137],
  K: [155, 206, 95],
  L: [212, 227, 74],
  M: [254, 218, 16],
  N: [247, 192, 0],
  O: [255, 168, 0],
  Ö: [235, 73, 36],
  P: [255, 138, 96],
  Q: [194, 194, 194],
  R: [143, 164, 175],
  S: [162, 136, 126],
  Ş: [65, 0, 147],
  T: [163, 163, 163],
  U: [175, 181, 226],
  Ü: [149, 114, 207],
  V: [179, 155, 221],
  W: [194, 194, 194],
  X: [124, 222, 235],
  Y: [188, 170, 164],
  Z: [173, 214, 125]
};

const ReactLetterAvatar = ({
  name,
  size = 100,
  radius = 0,
  circle,
  lang = "en-EN",
  style = {},
}) => {
  let firstLetter = (name || "X").trim()[0].toLocaleUpperCase(lang);

  let bgColor;
  if (/[A-Z]|Ö|Ç|Ğ|Ü|Ş|İ/.test(firstLetter)) {
    bgColor = colors[firstLetter];
  } else if (/[\d]/.test(firstLetter)) {
    bgColor = Object.values(colors)[parseInt(firstLetter, 0)];
  } else {
    bgColor = [0, 0, 0];
  }

  let avatarStyle = {
    display: "flex",
    backgroundColor: `rgb(${bgColor})`,
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    borderRadius: circle ? size / 2 : radius,
    fontSize: Math.floor(size / 2),
    color: "rgba(233,233,233,0.9)",
    alignItems: "center",
    ...style
  };

  return (
    <div style={avatarStyle}>
      {firstLetter}
    </div>
  );
};

export default ReactLetterAvatar;
