import secrets
import string


def create_random_key(length: int = 5) -> str:
    """
    Create a random string of specified length.
    """
    chars = string.ascii_uppercase + string.digits
    return "".join(secrets.choice(chars) for _ in range(length))
