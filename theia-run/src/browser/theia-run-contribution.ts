import { injectable } from "inversify";
import { MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
import { MAIN_MENU_BAR } from "@theia/core";
import { CustomRunCommands } from "./theia-run-command";

export namespace RunMenus {
  export const RUN_MENU = [...MAIN_MENU_BAR, "9_run"];
}

@injectable()
export class TheiaRunMenuContribution implements MenuContribution {
  registerMenus(menus: MenuModelRegistry): void {
    menus.registerSubmenu(RunMenus.RUN_MENU, "Project");

    menus.registerMenuAction(RunMenus.RUN_MENU, {
      commandId: CustomRunCommands.CUSTOM_RUN_PROJECT.id,
      label: CustomRunCommands.CUSTOM_RUN_PROJECT.label
    });

    menus.registerMenuAction(RunMenus.RUN_MENU, {
      commandId: CustomRunCommands.CUSTOM_INSTALL_PROJECT.id,
      label: CustomRunCommands.CUSTOM_INSTALL_PROJECT.label
    });
  }
}
