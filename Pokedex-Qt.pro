TEMPLATE = subdirs

CONFIG += ordered

SUBDIRS += \
    app \

#common configuration used for all sub projects
include ("defaults.pri")

DISTFILES += \
    uncrustify.cfg \
    .astylerc
