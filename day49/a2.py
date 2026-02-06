from enum import Enum

class PaymentStatus(Enum):
    PENDING = 'Awaiting payment'
    PROCESSING = 'Processing transaction'
    COMPLETED = 'Payment successful'
    FAILED = 'Payment failed'
    REFUNDED = 'Payment refunded'

    def is_finalized(self):
        return self in [
            PaymentStatus.COMPLETED,
            PaymentStatus.FAILED,
            PaymentStatus.REFUNDED
        ]

class PaymentMethod(Enum):
    CREDIT_CARD = 'credit_card'
    DEBIT_CARD = 'debit_card'
    GCASH = 'gcash'
    MAYA = 'maya'
    BANK_TRANSFER = 'bank_transfer'
    CASH_ON_DELIVERY = 'cash_on_delivery'


status = PaymentStatus.PENDING
print(status.value)
print(status.is_finalized())

method = PaymentMethod.GCASH
print(f"Paying via: {method.value}")