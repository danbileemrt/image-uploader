interface PluginMessage extends Record<string, unknown> {
  type: string;
}

interface Param {
  pluginMessage: PluginMessage;
}

const PLUGIN_ID = "1139836286825341983";

export default function securePostMessage(message: Param) {
  parent.postMessage(
    {
      ...message,
      pluginId: PLUGIN_ID,
    },
    "https://www.figma.com"
  );
}
