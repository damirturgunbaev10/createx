import React, { Fragment } from "react";
import HomeNumbersCorner from "../../assets/HomeNumbersCorner.svg";

const stats = [
  { id: 1, num: "1200", text: "Students graduated" },
  { id: 2, num: "84", text: "Completed courses" },
  { id: 3, num: "16", text: "Qualified tutors" },
  { id: 4, num: "5", text: "Years of experience" },
];

const styles = {
  container:
    "max-w-[1230px] w-full mx-auto flex items-center justify-between py-10 px-4 relative",
  item: "flex items-center gap-3 transition-transform duration-300 hover:scale-110 cursor-default",
  number: "text-[46px] font-black text-[#1E212C] leading-none",
  text: "text-[16px] text-[#1E212C] max-w-[100px] leading-tight",
  dot: "w-2 h-2 rounded-full bg-[#FF3F3A]",
};

const HomeNumbers = () => {
  return (
    <section className="bg-[#FEDBD3] p-[20px] w-full">
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <Fragment key={stat.id}>
            <div className={styles.item}>
              <span className={styles.number}>{stat.num}</span>
              <span className={styles.text}>{stat.text}</span>
            </div>

            {index !== stats.length - 1 && <div className={styles.dot}></div>}
          </Fragment>
        ))}

        <img
          className="absolute left-[-144px]"
          src={HomeNumbersCorner}
          alt="HomeNumbersCorner"
        />
      </div>
    </section>
  );
};

export default HomeNumbers;
