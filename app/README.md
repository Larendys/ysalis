# Foundry Virtual Tabletop

Welcome to the API documentation for **Foundry Virtual Tabletop**, an application for organizing and running tabletop roleplaying games in a beautiful and intuitive web-based application.

The goal of this documentation is to empower developers to create amazing game systems, add-on modules, and scripts which augment and extend the base functionality of the Foundry Virtual Tabletop platform.

----

## Entities

The primitive data objects in Foundry Virtual Tabletop are called *Entities*. Each entity represents a document which is stored in the database. Most of your interaction with the Foundry VTT API will involve interacting with and modifying Entities.

### Base Classes
Every Entity implementation extends the [Entity](Entity.html) base class.

* [The Entity Base Class](Entity.html)
* [Entity Collections](EntityCollection.html)
* [Socket Interface](SocketInterface.html)

### Entity Implementations
The following list enumerates the [Entity](Entity.html) implementations which exist within the Foundry VTT framework.

* [Actor](Actor.html)
* [Chat Message](ChatMessage.html)
* [Combat Encounter](Combat.html)
* [Folder](Folder.html)
* [Item](Item.html)
* [Journal Entry](JournalEntry.html)
* [Macro](Macro.html)
* [Audio Playlist](Playlist.html)
* [Scene](Scene.html)
* [Rollable Table](RollTable.html)
* [User](User.html)

----

## The Canvas

The visual game surface in Foundry VTT is managed by a WebGL-powered canvas which uses the [PixiJS](https://www.pixijs.com/) library.

### Canvas Building Blocks
The game canvas is constructed using several core building blocks.
* [Canvas](Canvas.html)
* [Canvas Layer](CanvasLayer.html)
* [Placeables Layer](PlaceablesLayer.html)
* [Placeable Object](PlaceableObject.html)
* [Canvas Animation](CanvasAnimation.html)

### Canvas Layers
The [Canvas](Canvas.html) is composed of multiple layers which are ordered from bottom-most to top-most according to the list below. Each layer is an implementation of the [CanvasLayer](CanvasLayer.html) class. 

* [Background Layer](BackgroundLayer.html)
* [Tiles Layer](BackgroundLayer.html)
* [Drawings Layer](DrawingsLayer.html)
* [Grid Layer](GridLayer.html)
* [Templates Layer](TemplatesLayer.html)
* [Walls Layer](WallsLayer.html)
* [Notes Layer](NotesLayer.html)
* [Tokens Layer](TokensLayer.html)
* [Lighting Layer](LightingLayer.html)
* [Sight Layer](SightLayer.html)
* [Sounds Layer](SoundsLayer.html)
* [Effects Layer](EffectsLayer.html)
* [Controls Layer](ControlsLayer.html)

### Canvas Objects
Canvas layers contain [PlaceableObject](PlaceableObject.html) instances which are rendered within that layer. The following are the available object types which may be placed.

* [Ambient Light](AmbientLight.html)
* [Ambient Sound](AmbientSound.html)
* [Drawing](Drawing.html)
* [Measured Template](MeasuredTemplate.html)
* [Tile](Tile.html)
* [Token](Token.html)
* [Note](Note.html)
* [Wall](Wall.html)

### HUD Overlay
In addition to WebGL canvas layers, there is also support for HTML-based canvas overlay known as "HUD" objects.

* [Drawing HUD](DrawingHUD.html)
* [Tile HUD](TileHUD.html)
* [Token HUD](TokenHUD.html)

----

## HTML Applications

In addition to the underlying data and the visual representation of that data on the Canvas, Foundry VTT renders many HTML Applications which represent modular interface components for browsing, editing, or configuring elements of the virtual tabletop.

### Application Building Blocks
The following classes provide high-level building blocks for defining HTML applications within FVTT.

* [Application](Application.html)
* [Form Application](Application.html)
* [Base Entity Sheet](BaseEntitySheet.html)
* [Dialog](Dialog.html)
* [Context Menu](ContextMenu.html)
* [File Picker](FilePicker.html)
* [Tabs](Tabs.html)
* [Text Editor](TextEditor.html)
* [Drag and Drop Helper](DragDrop.html)

----

## Dice Rolling

As a developer, you may often want to trigger dice rolls or customize the behavior of dice rolling. Foundry Virtual Tabletop provides a set of API concepts dedicated towards working with dice.

* [Roll](Roll.html)
* [DiceTerm](DiceTerm.html)
* [Die](Die.html)
* [Coin](Coin.html)
* [FateDie](FateDie.html)
* [DicePool](DicePool.html)
* [Mersenne Twister](MersenneTwister.html)

----

## Miscellaneous Extensions

In addition to the outlined structure above, there are many additional miscellaneous elements of the Foundry Virtual Tabletop API for you to explore. Please browse the sidebar for a complete listing of classes and functions. Some specific classes which are noteworthy or commonly used include:

* [Audio Helper](AudioHelper.html) - Utilities for working with Audio files.
* [Compendium](Compendium.html) - For creating and working with Compendium Packs.
* [Settings](Settings.html) - For creating, storing, and managing world and client settings.
* [Video Helper](VideoHelper.html) - Utilities for working with Video files.
* [WebRTC](WebRTC.html) - Framework for supporting A/V conferencing.
