import QtQuick 2.6
import QtQuick.Window 2.2
import "lib.qt.js" as App

Window {
    id: root
    visible: true
    property var pokemon: new App.Model.Pokemon({nationalDexNumber: "001", names: [], sprites: [], height: 1, weight: 1, stats: [], eggGroups: []});

    width: 200
    height: 100

    MouseArea {
        anchors.fill: parent
        onClicked: {
            Qt.quit();
        }
    }

    Text {
        anchors.fill: parent
        text: qsTr("DEX #: ") + root.pokemon.nationalDexNumber()
        anchors.horizontalCenter: parent.horizontalCenter
    }

}
