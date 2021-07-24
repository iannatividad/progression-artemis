import "./pre-start";
import app from "./Server";
import logger from "./shared/Logger";

const port = Number(process.env.PORT || 8081);

app.listen(port, () => {
  logger.info("Server started on port: " + port);
});
