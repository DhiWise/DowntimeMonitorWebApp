export const url = {
  Postman: "https://status.postman.com/api/v2/status.json",
  Slack: "https://cors-anywhere.herokuapp.com/https://status.slack.com/api/v2.0.0/current",
  Amazon: "https://cors-anywhere.herokuapp.com/https://status.aws.amazon.com/currentevents.json",
  ClickUp: "https://status.clickup.com/",
  Keka: "https://cors-anywhere.herokuapp.com/https://status.keka.com/",
  Canny: "https://cors-anywhere.herokuapp.com/https://status.canny.io",
  HubSpot: "https://status.hubspot.com/api/v2/status.json",
  HotJar: "https://status.hotjar.com/api/v2/status.json",
  MixPanel: "https://www.mixpanelstatus.com/api/v2/status.json",
  HoppScotch: "https://cors-anywhere.herokuapp.com/https://status.hoppscotch.io/",
  Vercel: "https://www.vercel-status.com/api/v2/status.json",
  GitHub: "https://www.githubstatus.com/api/v2/status.json",
  GitLab: "https://status.gitlab.com/",
  Figma: "https://status.figma.com/api/v2/status.json",
  Discord: "https://discordstatus.com/api/v2/status.json",
};
export const redirectUrl = {
  Postman: "https://status.postman.com/",
  Slack: "https://status.slack.com/",
  Amazon: "https://health.aws.amazon.com/health/status",
  ClickUp: "https://status.clickup.com/",
  Keka: "https://status.keka.com/",
  Canny: "https://status.canny.io/",
  HubSpot: "https://status.hubspot.com/",
  HotJar: "https://status.hotjar.com/",
  MixPanel: "https://www.mixpanelstatus.com/",
  HoppScotch: "https://status.hoppscotch.io/",
  Vercel: "https://www.vercel-status.com",
  GitHub: "https://www.githubstatus.com",
  GitLab: "https://status.gitlab.com/",
  Figma: "https://status.figma.com",
  Discord: "https://discordstatus.com",
};
export const image = {
  Postman: "https://www.postman.com/_ar-assets/images/favicon-1-48.png",
  Slack: "https://a.slack-edge.com/5f35cf0/img/icons/favicon-32-ua.png",
  Amazon: "https://docs.aws.amazon.com/assets/images/favicon.ico",
  ClickUp: "https://app.clickup.com/assets/favicons/apple-touch-icon.png",
  Keka: "https://c.keka.com/static/favicon.png",
  Canny:
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDQ1LjkgNjM4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0NDUuOSA2MzgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiM1RjVERjkiIGQ9Ik0yMjQuNSw2MzhDMTAxLjEsNjM4LDAsNTM3LjgsMCw0MTQuN1YyMjMuM0MwLDEwMC4yLDEwMS4xLDAsMjI0LjUsMGMxMDkuNiwwLDIwMi44LDc4LjMsMjIwLjksMTg2LjENCgkJCWMyLjksMTcuNC04LjYsMzMuOC0yNiwzNi44Yy0xNy40LDIuOS0zMy43LTguOC0zNi43LTI2LjJjLTEzLTc3LTc4LjYtMTMyLjktMTU3LTEzMi45Yy04OC4yLDAtMTU5LjMsNzEuNi0xNTkuMywxNTkuNXYxOTEuNA0KCQkJYzAsODgsNzEuMSwxNTkuNSwxNTkuMywxNTkuNWM3OC4zLDAsMTQ0LjItNTUuOSwxNTcuMS0xMzIuOWMyLjktMTcuNCwxOS4zLTI5LjEsMzYuNi0yNi4yYzE3LjQsMi45LDI4LjYsMTkuNCwyNS43LDM2LjcNCgkJCUM0MjcuMiw1NTkuNywzMzQsNjM4LDIyNC41LDYzOHoiLz4NCgk8L2c+DQoJPGcgb3BhY2l0eT0iMC41Ij4NCgkJPHBhdGggZmlsbD0iIzVGNURGOSIgZD0iTTE1My42LDM0Ny43Yy0xNy42LDAtMzAuNy0xNC4zLTMwLjctMzEuOXYtOTIuM2MwLTU2LjgsNDUuOC0xMDMsMTAyLjgtMTAzYzM4LjksMCw3My45LDIxLjYsOTEuNyw1Ni40DQoJCQljOCwxNS43LDEuNywzNC45LTE0LDQyLjljLTE1LjcsOC0zNSwxLjgtNDMtMTMuOWMtNi44LTEzLjQtMjEtMjEuNy0zNS44LTIxLjdjLTIxLjgsMC00MC4yLDE3LjYtNDAuMiwzOS4ydjkyLjMNCgkJCUMxODQuMywzMzMuNCwxNzEuMiwzNDcuNywxNTMuNiwzNDcuN3oiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==",
  HubSpot:
    "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
  HotJar: "https://www.hotjar.com/favicon.ico",
  MixPanel:
    "https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Mixpanel_Favicon_32x32.png",
  HoppScotch: "https://hoppscotch.io/icon.png",
  Vercel:
    "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png",
  GitHub: "https://github.com/fluidicon.png",
  GitLab:
    "https://gitlab.diamnow.com/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png",
  Figma: "https://static.figma.com/app/icon/1/favicon.svg",
  Discord: "data:image/png;base64,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",
};
