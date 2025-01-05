export default function ProjectCard({
  projectLink,
  projectName = "Project Name",
  projectImage,
  projectDescription = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, minima sed. Quisquam tenetur unde eos quis, nam sit assumenda. Sint?",
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${projectImage})`,
    backgroundSize:"cover",
minWidth:"280px",
        width: '100%',
        display: "flex",
        height: "300px",
        // padding: "16px",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flex: "1 0 0",
        borderRadius: "4px",
        border: "0.5px solid var(--border-action, #2F80ED)",
        // background: "var(--surface-primary, #F0F3FF)",
      }}
    >
    
      <div
        style={{
            backgroundColor:" rgba(0, 0, 0, 0.7)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "4px",
          padding:"16px 8px",
          alignSelf: "stretch",
          width:"100%"
        }}
      >
        <h3
          style={{
            color: " #F0F0F0",
            fontFamily: "Poppins",
            fontSize: "var(--Font-Size-Heading-h6, 20px)",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "var(--Line-Height-Heading-h6, 24px)", // 120%
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
     width:"100%"

          }}
        >
          {projectName}
        </h3>
        <p
          style={{
            color: "var(--Text-body, #F0F0F0)",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "var(--Line-Height-Body-M, 20px)", // 171.429%
            display: "-webkit-box",
            WebkitLineClamp: 2, // Limit to 3 lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden", // Hide text beyond the specified number of lines
            textOverflow: "ellipsis", // Add the ellipsis (...)
          }}
        >
          {projectDescription}{" "}
        </p>
          <div className="cardTop" > 
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--Text-action, #D3D3D3)",
            textAlign: "right",
            fontFamily: "Poppins",
            fontSize: "var(--Font-Size-body-S, 12px)",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "var(--Line-Height-Body-S, 20px)", // 166.667%
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            textDecorationSkipInk: "auto",
            textDecorationThickness: "auto",
            textUnderlineOffset: "auto",
            textUnderlinePosition: "from-font",
            alignSelf: "stretch",
           
          }}
        >
          View More
        </a>
      </div>
      </div>

    </div>
  );
}
