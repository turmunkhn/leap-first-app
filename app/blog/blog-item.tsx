import Image from "next/image";

export const BlogItem = ({ title, description, imageUrl }) => {
  return (
    <div
      style={{
        height: "440px",
        width: "363px",
        backgroundColor: "white",
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      <img src={imageUrl} width={370} height={147} alt="profileImage" />
      <div
        style={{
          paddingLeft: "24px",
          paddingBottom: "19px",
          paddingTop: "10px",
        }}
      >
        <h1>{title}</h1>
        <p style={{ paddingTop: "25px", paddingBottom: "57px" }}>
          {description}
        </p>
        {/* <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Image
            src="/profile.jpg"
            width={45}
            height={45}
            alt="profileImage"
            style={{ borderRadius: "50%" }}
          />
          <p>Wade Warren</p>
          <p>|</p>
          <p>2nd January,2022</p>
        </div> */}
      </div>
    </div>
  );
};
