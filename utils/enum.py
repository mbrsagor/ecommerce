from enum import IntEnum


class RelationShipStatus(IntEnum):
    SINGLE = 0
    MARRIED = 1
    RELATIONSHIP = 2
    OTHERS = 3

    @classmethod
    def get_choices(cls):
        return [(key.value, key.name) for key in cls]
