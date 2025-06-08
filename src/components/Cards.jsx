import { Button, ButtonLink, SecondaryButtonLink } from "./Ui"

export const TicketCard = ({
  title = "",
  price,
  description = "",
  features = [],
  buttonText,
  buttonLink = undefined,
  note,
}) => {
  return (
    <div class="flex-1 max-w-md mx-auto border border-white text-gray-100 rounded-2xl p-6 shadow-md relative flex flex-col">
      {/* Header */}
      {title && <h2 class="text-3xl font-bold leading-tight tracking-tight mb-4 uppercase">{title}</h2>}

      {/* Price Section */}
      {price && <div class="mb-4 font-mono w-full text-xl font-medium">{price}</div>}

      {price && <hr class="border-gray-300 mb-4" />}

      {/* Description */}
      {description && (
        <div class="mb-4 space-y-2 font-mono">
          <p class="text-base">{description}</p>
        </div>
      )}
      {description && features.length > 0 && <hr class="border-gray-300 mb-4" />}

      {/* Features */}
      {features.length > 0 && (
        <ul class="text-base font-mono space-y-2 mb-6">
          {features.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>
      )}

      {/* Footer Note */}
      {note && <p class="text-base font-mono space-y-2 mb-6">{note}</p>}

      {/* Button */}
      {buttonText && (
        <div class="mt-auto ">
          {buttonLink ? (
            <ButtonLink href={buttonLink} target="_blank" rel="noopener noreferrer">
              {buttonText}
            </ButtonLink>
          ) : (
            <Button>{buttonText}</Button>
          )}
        </div>
      )}
    </div>
  )
}

export const HotelCard = ({
  name = "",
  additionalInformation = "",
  prices = [],
  travelTime = "",
  website = "",
  mapUrl = "",
  bookingInfo = "",
  imagePath = "",
  imageAlt = "",
}) => {
  return (
    <div class="flex-1 w-full mx-auto border border-white text-gray-100 rounded-2xl p-6 shadow-md relative flex flex-col">
      {/* Header */}
      {name && <h2 class="text-3xl font-bold leading-tight tracking-tight mb-4 uppercase">{name}</h2>}

      {/* Additional Information */}
      {additionalInformation && (
        <div class="mb-4 space-y-2 font-mono">
          <p class="text-base">{additionalInformation}</p>
        </div>
      )}
      {additionalInformation && (prices.length > 0 || travelTime || bookingInfo) && <hr class="border-gray-300 mb-4" />}

      {/* Prices Section */}
      {prices.length > 0 && (
        <div class="mb-4 font-mono w-full text-base">
          <p class="font-semibold mb-1">Prices:</p>
          <ul class="list-disc list-inside ml-4 space-y-1">
            {prices.map((price) => (
              <li>{price}</li>
            ))}
          </ul>
        </div>
      )}
      {prices.length > 0 && (travelTime || bookingInfo) && <hr class="border-gray-300 mb-4" />}

      {/* Travel Time */}
      {travelTime && (
        <div class="mb-4 space-y-2 font-mono">
          <p class="text-base">{travelTime}</p>
        </div>
      )}
      {travelTime && bookingInfo && <hr class="border-gray-300 mb-4" />}

      {/* Booking Info */}
      {bookingInfo && (
        <div class="mb-4 space-y-2 font-mono">
          <p class="text-base">
            <span class="font-bold">Booking: </span>
            {bookingInfo}
          </p>
        </div>
      )}
      {bookingInfo && imagePath && <hr class="border-gray-300 mb-4" />}

      {/* Image */}
      {imagePath && (
        <details class="my-4 bg-white/5 rounded-lg overflow-hidden">
          <summary class="p-3 cursor-pointer hover:bg-white/10 transition-colors font-medium">
            {imageAlt || "View Image"}
          </summary>
          <div class="p-3 bg-black/20">
            <img src={imagePath} alt={imageAlt} class="w-full max-w-2xl mx-auto rounded-lg border border-white/20" />
          </div>
        </details>
      )}

      {/* Buttons */}
      {(website || mapUrl) && (
        <div class="mt-auto flex flex-wrap gap-4">
          {website && (
            <ButtonLink href={website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </ButtonLink>
          )}
          {mapUrl && (
            <SecondaryButtonLink href={mapUrl} target="_blank" rel="noopener noreferrer">
              View on Map
            </SecondaryButtonLink>
          )}
        </div>
      )}
    </div>
  )
}

export const SponsorshipCard = ({
  title = "",
  price = undefined,
  features = [],
  buttonText,
  buttonLink = undefined,
  footnotes = [], // Array of objects { number, content } or JSX elements
}) => {
  return (
    <div class="flex-1 w-full border border-white text-gray-100 rounded-2xl p-6 shadow-md relative flex flex-col">
      {/* Header */}
      {title && <h2 class="text-3xl font-bold leading-tight tracking-tight mb-4 uppercase">{title}</h2>}

      {/* Price Section */}
      {price && <div class="mb-4 font-mono w-full text-xl font-medium">{price}</div>}

      {price && features.length > 0 && <hr class="border-gray-300 mb-4" />}

      {/* Features */}
      {features.length > 0 && (
        <ul class="text-base font-mono space-y-2 mb-6">
          {features.map((feature, index) => (
            <li>{feature}</li>
          ))}
        </ul>
      )}

      {/* Footnotes - Rendered after features, if any */}
      {footnotes.length > 0 && (
        <div class="text-sm font-mono space-y-1 mb-6">
          {footnotes.map((footnote, index) => (
            // Assuming footnote is a JSX element or string. If it's an object {number, content},
            // you might want to render it differently, e.g., using ExpandableFootnote
            <div>{footnote}</div>
          ))}
        </div>
      )}

      {/* Button */}
      {buttonText && (
        <div class="mt-auto ">
          {buttonLink ? (
            <ButtonLink href={buttonLink} target="_blank" rel="noopener noreferrer">
              {buttonText}
            </ButtonLink>
          ) : (
            <Button>{buttonText}</Button>
          )}
        </div>
      )}
    </div>
  )
}
