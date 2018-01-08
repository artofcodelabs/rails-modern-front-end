import { Deps, Loco } from "loco-js";
import ActionCable from "actioncable";
import NotificationCenter from "../services/NotificationCenter";

Deps.cable = ActionCable.createConsumer();
Deps.NotificationCenter = NotificationCenter;

const loco = new Loco();

loco.init();
