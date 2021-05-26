def prepare_success_response(serializer_data):
    """ prepare success response for all serializer """
    response = {
        'type': 'success',
        'message': 'Data successfully returned',
        'data': serializer_data
    }
    return response


def prepare_error_response(details):
    '''
    get error message and return error response
    :param details:
    :return:
    '''
    response = {
        'type': 'error',
        'message': details,
        "data": None
    }
    return response


def created_success_response(message):
    """ create success response """
    response = {
        'type': 'success',
        'message': message,
        'data': ""
    }
    return response


def prepare_success_response_with_pagination(serializer_data, count, total_count, page, nxt, prev, page_size):
    """ prepare success response for all serializer with pagination"""
    response = {
        'type': 'success',
        'message': 'Data successfully returned',
        'totalCount': total_count,
        'count': count,
        'page': page,
        'next': nxt,
        'prev': prev,
        'page_size': page_size,
        'data': serializer_data
    }
    return response
