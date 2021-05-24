from django.utils.translation import gettext as _

SUCCESSFULLY_CREATED_MSG = _("Successfully created")

# exception
HTTP_500_INTERNAL_SERVER_ERROR_MSG = _("Internal server error")

# error
DATA_VALIDATION_FAILED_MSG = _("Data validation error")

PARTNER_ID_REQUIRED_MSG = _("Partner ID is required field")
PARTNER_NOT_FOUND_MSG = _("Partner ID Not Found")

PHONE_NUMBER_ERROR_MSG = _("Phone number is not valid")

FILE_VALIDATION_ERROR_MSG = _("Please input Base64 valid data.")
from enum import IntEnum


class RELATIONSHIPSTATUS(IntEnum):
    SINGLE = 0
    MARRIED = 1
    RELATIONSHIP = 2
    OTHRS = 3

    @classmethod
    def get_choices(cls):
        return [(key.value, key.name) for key in cls]
