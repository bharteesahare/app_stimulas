import { Controller } from "stimulus";
import { Turbo } from "@hotwired/turbo-rails";

export default class extends Controller {
  connect() {
    Turbo.connectStreamSource(this.element);
  }
}
