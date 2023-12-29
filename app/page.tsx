const Star = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17.5195L16.15 20.0295C16.91 20.4895 17.84 19.8095 17.64 18.9495L16.54 14.2295L20.21 11.0495C20.88 10.4695 20.52 9.36952 19.64 9.29952L14.81 8.88952L12.92 4.42952C12.58 3.61952 11.42 3.61952 11.08 4.42952L9.19001 8.87952L4.36001 9.28952C3.48001 9.35952 3.12001 10.4595 3.79001 11.0395L7.46001 14.2195L6.36001 18.9395C6.16001 19.7995 7.09001 20.4795 7.85001 20.0195L12 17.5195Z"
        fill="#FFBB00"
      />
    </svg>
  );
};

export default function Home() {
  const array = [
    {
      sentence:
        "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      name: "Amy Klassen",
      imageUrl: "/profile.jpg",
    },
    {
      sentence:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      name: "Hello",
      imageUrl: "/profile.jpg",
    },
    { sentence: "123", name: "Hi", imageUrl: "/profile.jpg" },
    { sentence: "abc", name: "Box", imageUrl: "/profile.jpg" },
  ];
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        gap: "20px",
      }}
    >
      {array.map((value, index) => {
        return (
          <div
            style={{ height: "500px", width: "500px", backgroundColor: "red" }}
            key={index}
          >
            <p style={{ color: "white" }}>{value.sentence}</p>
            <p style={{ color: "white" }}>{value.name}</p>
            <img src={value.imageUrl} />
          </div>
        );
      })}
    </div>
  );
}
