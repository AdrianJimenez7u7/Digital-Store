from rest_framework.pagination import PageNumberPagination


class SmallResultsSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 1000

class StandardResultsSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 1000

class LargeResultsSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 15
    page_size_query_param = 'page_size'
    max_page_size = 1000

