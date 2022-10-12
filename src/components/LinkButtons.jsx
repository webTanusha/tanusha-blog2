import InstagramLinkButton from "./linkButtons/InstagramLinkButton";
import TelegramLinkButton from "./linkButtons/TelegramLinkButton";
import HomeLinkButton from "./linkButtons/HomeLinkButton";
import AboutLinkButton from "./linkButtons/AboutLinkButton";
import BlogLinkButton from "./linkButtons/BlogLinkButton";
import "./linkButtons.css";

export default function LinkButtons() {
  return (
    <nav>
      <HomeLinkButton />
      <AboutLinkButton />
      <BlogLinkButton />
      <InstagramLinkButton />
      <TelegramLinkButton />
    </nav>
  );
}
