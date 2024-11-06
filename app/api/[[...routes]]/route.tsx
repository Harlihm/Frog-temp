/** @jsxImportSource frog/jsx */

import { Button, Frog } from 'frog';
import '../../../public/styles.css'; 
import { devtools } from 'frog/dev';
import { handle } from 'frog/next';
import { serveStatic } from 'frog/serve-static';
// import home from "../../../public/home.png";

import { Box,
  Columns,
  Column,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Rows,
  Row,
  Spacer,
  Text,
  VStack,
  vars, } from './ui';

const app = new Frog({
  assetsPath: "/",
  basePath: "/api",

  title: 'get fid',
  hub: {
    apiUrl: "https://hubs.airstack.xyz",
    fetchOptions: {
      headers: {
        "x-airstack-hubs": "169e066379fe64383829ba720e9d3717a",
      }
    }
  }
});

app.frame('/second', (c) => {
  const { frameData, verified } = c;

  // Debug logs
  console.log("frameData:", frameData);

  // Check if frameData is valid
  if (!frameData || !frameData.fid || !frameData.castId) {
    console.log("Verification failed: Invalid frame data");
    return c.res({
      action: "/",
      image: (
        <div style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
          fontSize: "2rem"
        }}>
          Verification failed: Invalid frame data
        </div>
      ),
      intents: [
        <Button>back</Button>,
      ],
    });
  }

  // Frame is valid, proceed with the intended action
  const { fid } = frameData as { fid: number };

  console.log("fid:", fid);

  return c.res({
    action: "/",
    image: (
      <div style={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
        fontSize: "2rem"
      }}>
        Your fid is {fid}
      </div>
    ),
    intents: [
      <Button>back</Button>,
    ],
  });
});

app.frame('/', (c) => {
  return c.res({
    action: "/second",
    image: (
      <div style={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "2rem"
      }}>
        Get FID
      </div>
    ),
    intents: [
      <Button>go</Button>,
    ],
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
