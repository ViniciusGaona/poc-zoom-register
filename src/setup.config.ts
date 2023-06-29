
export function getConfig() {
  const {
    ZOOM_AUTH_URL,
    ZOOM_URL,
    ZOOM_CLIENT_ID,
    ZOOM_CLIENT_SECRET,
    ZOOM_ACCOUNT_ID,
    WEBINAR_ID,
    REGISTER_FIRST_NAME,
    REGISTER_LAST_NAME,
    REGISTER_EMAIL,
    REGISTER_ORG
  } = process.env

  if (
    ZOOM_AUTH_URL === undefined ||
    ZOOM_URL === undefined ||
    ZOOM_CLIENT_ID === undefined ||
    ZOOM_CLIENT_SECRET === undefined ||
    ZOOM_ACCOUNT_ID === undefined ||
    WEBINAR_ID === undefined ||
    REGISTER_FIRST_NAME === undefined ||
    REGISTER_LAST_NAME === undefined ||
    REGISTER_EMAIL === undefined ||
    REGISTER_ORG === undefined
  ) {
    console.error(
      `Error retrieving configuration. One of the keys is undefined`
    )
    throw new Error('Config Error')
  }

  return {
    zoomAuthUrl: ZOOM_AUTH_URL,
    zoomUrl: ZOOM_URL,
    zoomClientId: ZOOM_CLIENT_ID,
    zoomClientSecret: ZOOM_CLIENT_SECRET,
    zoomAccountId: ZOOM_ACCOUNT_ID,
    webinarId: WEBINAR_ID,
    registerFirstName: REGISTER_FIRST_NAME,
    registerLastName: REGISTER_LAST_NAME,
    registerEmail: REGISTER_EMAIL,
    registerOrg: REGISTER_ORG
  }
}
