#!/usr/bin/env python3    
import asyncio
import logging
import sys
from os import getenv
from os import popen

from aiogram import Bot, Dispatcher, types
from aiogram.enums import ParseMode
from aiogram.filters import CommandStart
from aiogram.types import Message
from aiogram.exceptions import TelegramBadRequest

TOKEN = getenv("BOT_TOKEN")

START_MESSAGE = '''Привет пользователь!

Я великий бот, который умеет только <strong>проверять доступность доменов vsuet-ctf.ru</strong>. Да, на меня возложена серьезная задача.
Например, если ты хочешь проверить доступность сайта vsuet-ctf.ru или wiki.vsuet-ctf.ru, то просто пришли мне его доменное имя. Заметь, что остальные домены мной приняты не будут.

Дерзай! ВОСПОЛЬЗУЙСЯ МНОЙ

пример соообщения, который я точно приму:
<code>
vsuet-ctf.ru
</code>

P.S. просто пришли мне домен, я сам подставлю его к команде. и главное помни, НИКАКИХ КОМАНД ДЛЯ LINUX'''

dp = Dispatcher()


@dp.message(CommandStart())
async def command_start_handler(message: Message) -> None:
    await message.answer(START_MESSAGE)


@dp.message()
async def echo_handler(message: types.Message) -> None:
    try:
        # Send a copy of the received message
        domen = message.text
        print('ping from', message.from_user.id, message.from_user.full_name, '—', domen)
        
        if domen.count('ping'):
            await message.reply('зачем ты пытаешься ввести ping, если я его уже использую....')
            return
        
        if not domen.count('vsuet-ctf.ru'):
            raise TypeError
        
        result = popen('ping -c 4 ' + domen).read()
        await message.reply(result)
    except (TypeError, TelegramBadRequest, AttributeError):
        # But not all the types is supported to be copied so need to handle it
        await message.answer("Nice try!")


async def main() -> None:
    bot = Bot(TOKEN, parse_mode=ParseMode.HTML)
    await dp.start_polling(bot)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, stream=sys.stdout)
    asyncio.run(main())