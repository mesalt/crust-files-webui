import { axiosAuth } from "@/util/axios";
import type { StorageInfo } from "@/util/type";

async function getStorageInfo() {
  try {
    const storageInfo: StorageInfo = await axiosAuth.get('https://pin.crustcode.com/psa/pins');
    // const storageInfo: StorageInfo = {
    //   count: 2,
    //   results: [
    //     {
    //       requestid: "442c0de0-2de1-48b9-8ed2-11f736b4d12e-1739599531155",
    //       status: "pinning",
    //       created: "2025-02-15T06:01:21+00:00",
    //       pin: {
    //         cid: "bafkreidftfutn65qikiv663uuiapzxph4qipgktgtmnlswl47kslb6w5wu",
    //         name: "env.d.ts",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "282c0290-f330-412d-b05b-0737f3a88e33-1739183735671",
    //       status: "pinning",
    //       created: "2025-02-10T10:35:35+00:00",
    //       pin: {
    //         cid: "bafkreihjk4kikvep3vsjmum62mi5c424jzldu3ozevbkz6mkwutxum7gjy",
    //         name: "a.txt",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "442c0de0-2de1-48b9-8ed2-11f736b4d12e-1739599531155",
    //       status: "pinning",
    //       created: "2025-02-15T06:01:21+00:00",
    //       pin: {
    //         cid: "bafkreidftfutn65qikiv663uuiapzxph4qipgktgtmnlswl47kslb6w5wu",
    //         name: "env.d.ts",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "282c0290-f330-412d-b05b-0737f3a88e33-1739183735671",
    //       status: "pinning",
    //       created: "2025-02-10T10:35:35+00:00",
    //       pin: {
    //         cid: "bafkreihjk4kikvep3vsjmum62mi5c424jzldu3ozevbkz6mkwutxum7gjy",
    //         name: "a.txt",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "442c0de0-2de1-48b9-8ed2-11f736b4d12e-1739599531155",
    //       status: "pinning",
    //       created: "2025-02-15T06:01:21+00:00",
    //       pin: {
    //         cid: "bafkreidftfutn65qikiv663uuiapzxph4qipgktgtmnlswl47kslb6w5wu",
    //         name: "env.d.ts",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "282c0290-f330-412d-b05b-0737f3a88e33-1739183735671",
    //       status: "pinning",
    //       created: "2025-02-10T10:35:35+00:00",
    //       pin: {
    //         cid: "bafkreihjk4kikvep3vsjmum62mi5c424jzldu3ozevbkz6mkwutxum7gjy",
    //         name: "a.txt",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "442c0de0-2de1-48b9-8ed2-11f736b4d12e-1739599531155",
    //       status: "pinning",
    //       created: "2025-02-15T06:01:21+00:00",
    //       pin: {
    //         cid: "bafkreidftfutn65qikiv663uuiapzxph4qipgktgtmnlswl47kslb6w5wu",
    //         name: "env.d.ts",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "282c0290-f330-412d-b05b-0737f3a88e33-1739183735671",
    //       status: "pinning",
    //       created: "2025-02-10T10:35:35+00:00",
    //       pin: {
    //         cid: "bafkreihjk4kikvep3vsjmum62mi5c424jzldu3ozevbkz6mkwutxum7gjy",
    //         name: "a.txt",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "442c0de0-2de1-48b9-8ed2-11f736b4d12e-1739599531155",
    //       status: "pinning",
    //       created: "2025-02-15T06:01:21+00:00",
    //       pin: {
    //         cid: "bafkreidftfutn65qikiv663uuiapzxph4qipgktgtmnlswl47kslb6w5wu",
    //         name: "env.d.ts",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "282c0290-f330-412d-b05b-0737f3a88e33-1739183735671",
    //       status: "pinning",
    //       created: "2025-02-10T10:35:35+00:00",
    //       pin: {
    //         cid: "bafkreihjk4kikvep3vsjmum62mi5c424jzldu3ozevbkz6mkwutxum7gjy",
    //         name: "a.txt",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "442c0de0-2de1-48b9-8ed2-11f736b4d12e-1739599531155",
    //       status: "pinning",
    //       created: "2025-02-15T06:01:21+00:00",
    //       pin: {
    //         cid: "bafkreidftfutn65qikiv663uuiapzxph4qipgktgtmnlswl47kslb6w5wu",
    //         name: "env.d.ts",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "282c0290-f330-412d-b05b-0737f3a88e33-1739183735671",
    //       status: "pinning",
    //       created: "2025-02-10T10:35:35+00:00",
    //       pin: {
    //         cid: "bafkreihjk4kikvep3vsjmum62mi5c424jzldu3ozevbkz6mkwutxum7gjy",
    //         name: "a.txt",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "442c0de0-2de1-48b9-8ed2-11f736b4d12e-1739599531155",
    //       status: "pinning",
    //       created: "2025-02-15T06:01:21+00:00",
    //       pin: {
    //         cid: "bafkreidftfutn65qikiv663uuiapzxph4qipgktgtmnlswl47kslb6w5wu",
    //         name: "env.d.ts",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //     {
    //       requestid: "282c0290-f330-412d-b05b-0737f3a88e33-1739183735671",
    //       status: "pinning",
    //       created: "2025-02-10T10:35:35+00:00",
    //       pin: {
    //         cid: "bafkreihjk4kikvep3vsjmum62mi5c424jzldu3ozevbkz6mkwutxum7gjy",
    //         name: "a.txt",
    //         meta: null,
    //         origins: [],
    //       },
    //       delegates: [
    //         "/ip4/183.131.193.198/tcp/14001/p2p/12D3KooWMcAHcs97R49PLZjGUKDbP1fr9iijeepod8fkktHTLCgN",
    //       ],
    //       info: {},
    //     },
    //   ],
    // };
    return storageInfo;
  } catch {
    console.log("getStoreageInfo error");
    return null;
  }
}

export { getStorageInfo };
