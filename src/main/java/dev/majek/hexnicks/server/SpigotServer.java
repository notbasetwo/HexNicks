/*
 * This file is part of HexNicks, licensed under the MIT License.
 *
 * Copyright (c) 2020-2021 Majekdor
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
package dev.majek.hexnicks.server;

import dev.majek.hexnicks.Nicks;
import net.kyori.adventure.platform.bukkit.BukkitAudiences;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.minimessage.MiniMessage;
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.player.AsyncPlayerChatEvent;
import org.jetbrains.annotations.NotNull;

/**
 * Handles Spigot server software.
 */
@SuppressWarnings("deprecation")
public final class SpigotServer implements ServerSoftware {

  private final LegacyComponentSerializer legacyComponentSerializer;

  public SpigotServer() {
    legacyComponentSerializer = LegacyComponentSerializer.builder().hexColors()
        .useUnusualXRepeatedCharacterHexFormat().build();
  }

  @Override
  public @NotNull Component getNick(@NotNull Player player) {
    return legacyComponentSerializer.deserialize(player.getDisplayName());
  }

  @Override
  public void setNick(@NotNull Player player, @NotNull Component nickname) {
    String nick = legacyComponentSerializer.serialize(nickname) + "§r";
    Nicks.core().getNickMap().put(player.getUniqueId(), nickname);
    player.setDisplayName(nick);
    if (Nicks.config().TAB_NICKS) {
      player.setPlayerListName(nick);
    }
    Nicks.storage().saveNick(player);
  }

  @Override
  public void removeNick(@NotNull Player player) {
    Nicks.core().getNickMap().remove(player.getUniqueId());
    player.setDisplayName(player.getName());
    if (Nicks.config().TAB_NICKS) {
      player.setPlayerListName(player.getName());
    }
    Nicks.storage().removeNick(player.getUniqueId());
  }

  @Override
  public void sendMessage(@NotNull CommandSender sender, @NotNull Component message) {
    BukkitAudiences.create(Nicks.core()).sender(sender).sendMessage(message);
  }

  @Override
  public @NotNull String softwareName() {
    return "SpigotMC";
  }

  @EventHandler(priority = EventPriority.LOWEST)
  public void onChat(AsyncPlayerChatEvent event) {
    if (Nicks.config().CHAT_FORMATTER) {
      String format = Nicks.config().CHAT_FORMAT;
      String message = event.getMessage();
      if (Nicks.config().LEGACY_COLORS) {
        message = Nicks.utils().legacyToMini(message);
      }
      message = legacyComponentSerializer.serialize(MiniMessage.miniMessage().parse(message));
      format = Nicks.utils().miniToLegacy(format)
          .replace("{displayname}", legacyComponentSerializer.serialize(Nicks.core().getDisplayName(event.getPlayer())))
          .replace("{message}", message)
          .replace("{prefix}", Nicks.hooks().vaultPrefix(event.getPlayer()))
          .replace("{suffix}", Nicks.hooks().vaultSuffix(event.getPlayer()));
      event.setFormat(Nicks.utils().applyLegacyColors(format));
      Nicks.debug("spigot chat event - " + event.getFormat());
    }
  }
}
