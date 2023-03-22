$gameMap.events().forEach(function (ev) {
    if (ev.event().note == "target") {
        if (ev.event().x == $gameMap.event(7).x) {
            if (ev.event().y == $gameMap.event(7).y) {
                $gameSelfSwitches.setValue( [ev._mapId, ev._eventId, 'A'], true )
            }
        }
        
    }
}
)