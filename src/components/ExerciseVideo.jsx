import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Loader } from "./Loader";

export const ExerciseVideo = ({ exerciseVideos, name }) => {
  console.log("Exercise Videos Data:", exerciseVideos);

  if (!exerciseVideos || exerciseVideos.length === 0) return <Loader />

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
      >
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise Video
      </Typography>

      <Stack
      sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center"
      >
        {exerciseVideos.slice(0, 4).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="exercise-video"
          >
            {item.video.thumbnails && item.video.thumbnails.length > 0 ? (
              <>
                <img
                  style={{ borderTopLeftRadius: "20px" }}
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <Box>
                <Typography
                 sx={{fontSize:{lg: '28px' , xs: '18px'}}}
                 fontWeight={600}
                 color="#000"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="15px" color="#000">
                  {item.video.chennelName}
                </Typography>
                </Box>
              </>
            ) : (
              <p>No Thumbnail Available</p>
            )}
          </a>
        ))}
      </Stack>
    </Box>
  );
};
