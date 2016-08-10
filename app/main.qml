import QtQuick 2.6
import QtQuick.Window 2.2
import Native 1.0
import "lib.qt.js" as App

Window {
    id: root
    visible: true
    property var email: new App.Models.Email("xander@axrs.io");

    width: 200
    height: 100

    MouseArea {
        anchors.fill: parent
        onClicked: {
            Qt.quit();
        }
    }

    Column{
        anchors.fill: parent
        Text {
            text: qsTr("Version: ") + AppInfo.version
            anchors.horizontalCenter: parent.horizontalCenter
        }
        Text {
            text: qsTr("Email: ") + root.email.get()
            anchors.horizontalCenter: parent.horizontalCenter
        }
    }



}
